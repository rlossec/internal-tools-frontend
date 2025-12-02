interface KPICardProps {
  title: string;
  icon: string;
  value: string;
  overValue?: string;
}

export const KPICard = ({ title, icon, value, overValue }: KPICardProps) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <p className="text-sm text-text-light">{value}</p>
      <p className="text-sm text-text-light">{overValue}</p>
    </div>
  );
};
