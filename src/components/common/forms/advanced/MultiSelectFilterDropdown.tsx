import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface MultiSelectFilterDropdownProps<T extends string> {
  label: string;
  options: T[];
  selectedOptions: T[];
  onChange: (options: T[]) => void;
  className?: string;
}

export const MultiSelectFilterDropdown = <T extends string>({
  label,
  options,
  selectedOptions,
  onChange,
  className = "",
}: MultiSelectFilterDropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allSelected = selectedOptions.length === options.length;
  const someSelected = selectedOptions.length > 0 && !allSelected;

  const handleSelectAll = (checked: boolean) => {
    if (checked && allSelected) {
      // Si tout est déjà sélectionné et qu'on clique, on désélectionne
      onChange([]);
    } else if (checked) {
      // Sinon, on sélectionne tout
      onChange([...options]);
    } else {
      // Si on décoche, on désélectionne tout
      onChange([]);
    }
  };

  const handleOptionToggle = (option: T, checked: boolean) => {
    if (checked) {
      onChange([...selectedOptions, option]);
    } else {
      onChange(selectedOptions.filter((opt) => opt !== option));
    }
  };

  const getDisplayText = () => {
    if (allSelected) return "All";
    if (someSelected) {
      if (selectedOptions.length === 1) {
        return selectedOptions[0];
      }
      return `${selectedOptions.length} sélectionné${
        selectedOptions.length > 1 ? "s" : ""
      }`;
    }
    return "Tous";
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`} ref={ref}>
      <label className="text-sm font-semibold text-text-light">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg border transition-colors ${
            someSelected || allSelected
              ? "border-primary bg-primary/10 text-primary"
              : "border-border bg-background text-text-light hover:bg-background-alt"
          }`}
        >
          <span className="truncate">{getDisplayText()}</span>
          <ChevronDownIcon
            className={`w-4 h-4 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-background border border-border rounded-lg shadow-lg max-h-64 overflow-y-auto">
            <div className="p-2 flex flex-col gap-2">
              <div className="pb-2 border-b border-border">
                <label className="flex items-center gap-2 cursor-pointer w-full py-1">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 border-2 border-border rounded peer-checked:border-background-alt peer-checked:bg-background-alt transition-colors duration-200 peer-focus:ring-2 peer-focus:ring-background-alt peer-focus:ring-offset-2">
                      {allSelected && (
                        <svg
                          className="w-4 h-4 text-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-text-light">Tous</span>
                </label>
              </div>

              {/* Options individuelles - affichées verticalement */}
              <div className="flex flex-col gap-2">
                {options.map((option) => {
                  const isChecked = selectedOptions.includes(option);
                  return (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer w-full py-1 hover:bg-background-alt rounded px-1 transition-colors"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) =>
                            handleOptionToggle(option, e.target.checked)
                          }
                          className="sr-only peer"
                        />
                        <div className="w-5 h-5 border-2 border-border rounded peer-checked:border-background-alt peer-checked:bg-background-alt transition-colors duration-200 peer-focus:ring-2 peer-focus:ring-background-alt peer-focus:ring-offset-2">
                          {isChecked && (
                            <svg
                              className="w-4 h-4 text-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-text-light flex-1">
                        {option}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
