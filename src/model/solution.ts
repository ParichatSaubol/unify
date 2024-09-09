type TSolutionAddress = {
  address: string; //
  building: string; //อาคาร
  village: string; //หมู่บ้าน
  road: string; //ถนน
  postalCode: string; //รหัสไปรษณีย์
  province: string; //จังหวัด
  // country: string; //ประเทศ
  district: string; //อำเภอ/เขต
  subdistrict: string; //ตำบล/แขวง
};

type TSolution = TSolutionAddress & {
  //
  name: string; //ชื่อ
  company: string; //บริษัท
  position: string; //ตำแหน่ง
  department: string; //แผนก
  phone: string; //เบอร์โทร
  description: string; //รายละเอียด
  photo: string; //รูป
};

export type { TSolution, TSolutionAddress };
