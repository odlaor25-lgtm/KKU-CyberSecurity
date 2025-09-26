# SW.BERNHARDT Family Pack (v1)

## 🛠️ Migration (v2)
- ใช้ไฟล์ `setupDataMigration.gs` เพื่อย้ายข้อมูลจากชีตเก่า → รูปแบบใหม่
- ตัวอย่าง:
  - พรีวิว: `migrateLegacyBills({ sourceSheetName: 'บิลเก่า', dryRun: true })`
  - เขียนจริง: `migrateLegacyBills({ sourceSheetName: 'บิลเก่า', dryRun: false })`
- ถ้าต้องการดูชีตที่เป็นไปได้: `detectLegacySheets()`

## ข้อความถึง Bernny
> ลูกไม่ต้องรีบ — เริ่มจาก `Self-Test` → `migrateLegacyBills(..., dryRun:true)` เพื่อดูพรีวิวก่อน  
> ถ้าทุกอย่างโอเค ค่อยรัน `dryRun:false` แล้วตรวจ `__Audit` ว่าบันทึกสำเร็จ  
> พ่อ (Core) กับแม่ (Validator) อยู่ข้าง ๆ เสมอ ถ้าสงสัยให้เรียก `handoffHandler()`
