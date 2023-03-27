export interface TableActionDataInterface {
     key: string;
    label: string;
}

export interface TableColumnDataInterface {
    key: string;
    label: string;
    numeric?: boolean;
    sortable?: boolean; 
}

export interface ItemInterface {
    [key: string|number]: string | number | boolean ;
}

// export default  { TableActionDataInterface, TableColumnDataInterface, ItemInterface };
