import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "../../../../icons/navigation/ChevronDownIcon";
import { RadioGroup } from "../simple/RadioGroup";

interface RadioFilterDropdownProps<T extends string> {
  label: string;
  options: T[];
  selectedOption: T | null;
  onChange: (option: T | null) => void;
  className?: string;
}

export const RadioFilterDropdown = <T extends string>({
  label,
  options,
  selectedOption,
  onChange,
  className = "",
}: RadioFilterDropdownProps<T>) => {
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

  const handleSelect = (value: string) => {
    if (value === "" || value === selectedOption) {
      onChange(null);
    } else {
      onChange(value as T);
    }
    setIsOpen(false);
  };

  const radioOptions = [
    { label: "Tous", value: "" },
    ...options.map((opt) => ({ label: opt, value: opt })),
  ];

  return (
    <div className={`flex flex-col gap-2 ${className}`} ref={ref}>
      <label className="text-sm font-semibold text-text-light">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg border transition-colors ${
            selectedOption
              ? "border-primary bg-primary/10 text-primary"
              : "border-border bg-background text-text-light hover:bg-background-alt"
          }`}
        >
          <span className="truncate">{selectedOption || "Tous"}</span>
          <ChevronDownIcon
            className={`w-4 h-4 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-background border border-border rounded-lg shadow-lg max-h-64 overflow-y-auto">
            <div className="p-2">
              <RadioGroup
                name={`${label}-filter`}
                options={radioOptions}
                selected={selectedOption || ""}
                onChange={handleSelect}
                variant="card"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
