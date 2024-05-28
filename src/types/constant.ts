// 반복패턴
export type OptionsIprops = {
  id?: string;
  name?: string;
  size?: "small" | "middle" | "lager" | undefined;
  selectedValue?: string;
  optionItem: PattrnIprops[];
  handleSelect: (selectKey: string) => void;
};

export type PattrnIprops = {
  label: string;
  value: string;
};
export const pattern = [
  {
    label: "Once",
    value: "once",
  },
  {
    label: "Daily",
    value: "daily",
  },
  {
    label: "Weekly",
    value: "weekly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
];

// 사용유무
export const useYn = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "enable",
    label: "Enabled",
  },
  {
    value: "notEnable",
    label: "Not Enable",
  },
];
