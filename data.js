let productNumber = 1;

class Product {
    constructor(pname, desc, cost, material) {
        this.pid = productNumber++;
        this.name = pname;
        this.desc = desc;
        this.cost = cost;
        this.material = material;
    }
}

let productList = [
    new Product("product 1", "This is product 1.", 20, [[1,20],[2,30]]),
    new Product("product 2", "This is product 2.", 50, [[1,20],[3,50],[4,60]]),
    new Product("product 3", "This is product 3.", 30, [[4,20],[5,30]]),
    new Product("product 4", "This is product 4.", 50, [[1,20],[2,30]]),
    new Product("product 5", "This is product 5.", 50, [[1,20],[2,30]]),
    new Product("product 6", "This is product 6.", 50, [[1,20],[2,30]]),
    new Product("product 7", "This is product 7.", 50, [[1,20],[2,30]]),
    new Product("product 8", "This is product 8.", 50, [[1,20],[2,30]]),
];

let materialNumber = 1;
class Material {
    constructor(mname, qty, unit, rqty) {
        this.pid = materialNumber++;
        this.name = mname;
        this.qty = qty;
        this.rqty = rqty;
        this.reorderQty = 1000;
        this.unit = unit;
    }
    setReorderQty(newQty) {
        if (newQty >= 0) {
            this.reorderQty = newQty;
        }
    }
    restock(inValue) {
        this.qty += inValue;
    }
    isLowQty() {
        return this.qty < this.rqty;
    }
}

let materialList = [
    new Material("glass", 1000, "g", 500),
    new Material("steel", 1000, "g", 500),
    new Material("wool", 1000, "g", 500),
    new Material("plastic", 1000, "g", 500),
    new Material("paper", 1000, "g", 500),
];

let customerNumber = 1;
class Customer {
    constructor(cname, pw, tel, addr, company) {
        this.cid = customerNumber++;
        this.name = cname;
        this.pw = pw;
        this.tel = tel;
        this.addr = addr;
        this.company = company;
    }
}

let customerList = [
    new Customer("Alex", 123456, 23456789, "4279 Linda Valleys, Apt. 414, 30806, Albamouth, Wyoming, United States", "ABC company")
];