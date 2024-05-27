export type LabelIprops = {
  text?: string;
  bg?: string;
  color?: string;
  iconColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
};

export type CheckboxIprops = {
  label?: string;
  value?: string;
  name?: string;
  id?: string;
  color?: string;
  isLabel?: boolean;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type LogsDataIprops = {
  logData: LogsIprops[];
};

export type LogsIprops = {
  date: string;
  title: string;
  className: string;
  isFailed?: boolean;
};

export type DetailIprops = {};
