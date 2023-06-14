export interface blog {
    id: string,
    title:string,
    author_details: Author,
    company_details: CompanyDetails,
    company: string,
    content:string,
    cover_image:string,
    created_at:string,
    slug:string,
    status:string,
    updated_at:string,
}

export interface CompanyDetails {
    created_at: string,
    id: string,
    name: string
}

export interface Author {
    email:string,
    first_name:string,
    id:string,
    is_superuser: boolean,
    last_name:string,
    phone_number:string,
    user_type:string,
}