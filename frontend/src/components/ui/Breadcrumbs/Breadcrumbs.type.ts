interface BreadcrumbItem {
  label: string;
  link?: string;
}

export interface BreadcrumbsProps {
  className?: string;
  breadcrumbs: BreadcrumbItem[];
}
