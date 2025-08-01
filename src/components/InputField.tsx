'use client';

interface InputFieldProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  min?: number;
  max?: number;
  placeholder?: string;
  showRefreshButton?: boolean;
  onRefresh?: () => void;
  refreshLoading?: boolean;
  refreshStatus?: string;
}

export default function InputField({
  id,
  label,
  value,
  onChange,
  step = 1,
  min,
  max,
  placeholder,
  showRefreshButton = false,
  onRefresh,
  refreshLoading = false,
  refreshStatus
}: InputFieldProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-foreground mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          step={step}
          min={min}
          max={max}
          placeholder={placeholder}
          className="w-full px-5 py-4 border-2 border-input rounded-xl text-base font-medium bg-background text-foreground transition-all duration-200 focus:outline-none focus:border-ring focus:-translate-y-0.5 hover:border-ring font-sans"
        />
        {showRefreshButton && (
          <button
            onClick={onRefresh}
            disabled={refreshLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-[hsl(var(--chart-1))] text-white border-none rounded-md px-3 py-2 text-xs cursor-pointer transition-all duration-200 disabled:opacity-50"
          >
            {refreshLoading ? '...' : 'Live'}
          </button>
        )}
      </div>
      {refreshStatus && (
        <div className={`text-xs mt-1 ${refreshStatus.includes('failed') ? 'text-destructive' : 'text-muted-foreground'}`}>
          {refreshStatus}
        </div>
      )}
    </div>
  );
} 