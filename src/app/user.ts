export class User {
    constructor(
      public u_EmailId:string,
      public u_Name:string,
      public u_Address:string,
      public u_Type:string,
      public u_gender:string,
      public u_password:string,
      public u_mobileno:number,
      public u_dob:string,
      public u_img:string,
      public status?:string,
      public pro_name?:string,
      public pro_id?:number,
      public fk_pro_id?:number,
      public fk_order_id?:number,
      public order_id?:number,
      public fk_detail_id?:number,
      public track_id?:number
    )
    {}
}
