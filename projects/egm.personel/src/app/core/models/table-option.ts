export class TableOption {
    columns: TableColumn[] = [];
    data: any[] = [];


    pageSize?: number;
    pageSizeOptions?: number[];
    dataSource?: any[];
    totalItemCount?: number;
    pageIndex?: number;
    sortField?: string;
    sortDirection?: string;
}
export interface TableColumn {
    field: string;
    header: string;
}