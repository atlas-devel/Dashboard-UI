export interface MenuItem {
  icon: string;
  label: string;
  href: string;
  visible: ("admin" | "teacher" | "student" | "parent")[];
}

export interface Menu {
  title: string;
  items: MenuItem[];
}
