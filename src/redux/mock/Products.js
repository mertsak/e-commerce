// projede kullanılan ürünlerin bilgileri burada tutulmaktadır.
const ProductsData = [
  {
    id: 1,
    name: "Sony Wh-ch510",
    image: "sony.webp",
    imageFile: "HeadPhoneImage",
    description: "Black Wireless Bluetooh On-Ear HeadPhones",
    brand: "Sony",
    category: "HeadPhone",
    price: 199,
    countInStock: 86,
    numReviews: 238,
  },
  {
    id: 2,
    name: "Philips Tah4105",
    image: "philips.webp",
    imageFile: "HeadPhoneImage",
    description: "Black Wired On-Ear HeadPhones",
    brand: "Philips",
    category: "HeadPhone",
    price: 99,
    countInStock: 96,
    numReviews: 338,
  },
  {
    id: 3,
    name: "JBL T500",
    image: "jbl.webp",
    imageFile: "HeadPhoneImage",
    description: "Black Wired On-Ear HeadPhones",
    brand: "JBL",
    category: "HeadPhone",
    price: 149,
    countInStock: 108,
    numReviews: 356,
  },
  {
    id: 4,
    name: "Focal Stellia High-end",
    image: "focal.webp",
    imageFile: "HeadPhoneImage",
    description: "Brown On-Ear Wired HeadPhones",
    brand: "Focal",
    category: "HeadPhone",
    price: 1999,
    countInStock: 8,
    numReviews: 956,
  },
  {
    id: 5,
    name: "Sennheiser Hd 800 S",
    image: "sennheiser.jpg",
    imageFile: "HeadPhoneImage",
    description: "Black On-Ear Wired HeadPhones",
    brand: "Sennheiser",
    category: "HeadPhone",
    price: 1599,
    countInStock: 15,
    numReviews: 756,
  },
  {
    id: 6,
    name: "Beyerdynamic T1 32 Ohm",
    image: "beyerDynamic.jpg",
    imageFile: "HeadPhoneImage",
    description: "3rd Generation On-Ear HeadPhones",
    brand: "Beyerdynamic",
    category: "HeadPhone",
    price: 1399,
    countInStock: 23,
    numReviews: 496,
  },
  {
    id: 7,
    name: "Beyerdynamic Airpods Max",
    image: "apple.webp",
    imageFile: "HeadPhoneImage",
    description: "Green Wireless On-Ear HeadPhones",
    brand: "Beyerdynamic",
    category: "HeadPhone",
    price: 1199,
    countInStock: 31,
    numReviews: 446,
  },
  {
    id: 8,
    name: "ASUS Rog Delta S",
    image: "asus.jpg",
    imageFile: "HeadPhoneImage",
    description: "RGB 7.1 Gaming HeadPhones",
    brand: "ASUS",
    category: "HeadPhone",
    price: 1099,
    countInStock: 37,
    numReviews: 516,
  },
  {
    id: 9,
    name: "Apple MacBook Air",
    image: "macbook.webp",
    imageFile: "LaptopImage",
    description: " 8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD",
    brand: "Apple",
    category: "Laptop",
    price: 999,
    countInStock: 10,
    numReviews: 12,
  },
  {
    id: 10,
    name: "Casper Excalibur",
    image: "casper.webp",
    imageFile: "LaptopImage",
    description:
      "G911.1270-bv60x-b Intel I7-12700h 16gb Ram 500gb Ssd 6gb Rtx3060",
    brand: "Casper",
    category: "Laptop",
    price: 1199,
    countInStock: 15,
    numReviews: 17,
  },
  {
    id: 11,
    name: "Hp Victus",
    image: "hp.webp",
    imageFile: "LaptopImage",
    description: "Ryzen 7 6800h 16gb Ram 512gb Ssd 4gb Rtx3050ti",
    brand: "Hp",
    category: "Laptop",
    price: 899,
    countInStock: 23,
    numReviews: 19,
  },
  {
    id: 12,
    name: "Asus Rog Strıx",
    image: "asus.jpg",
    imageFile: "LaptopImage",
    description: "I9-12950hx 32gb 4tb Ssd 16gb Rtx3080tı",
    brand: "Asus",
    category: "Laptop",
    price: 5999,
    countInStock: 3,
    numReviews: 9,
  },
  {
    id: 13,
    name: "Monster Abra",
    image: "monster.webp",
    imageFile: "LaptopImage",
    description: "Intel Core I5-12500h 8 Gb Ram 500gb Ssd 4gb Gtx1650",
    brand: "Monster",
    category: "Laptop",
    price: 799,
    countInStock: 26,
    numReviews: 15,
  },
  {
    id: 14,
    name: "Msi Alpha",
    image: "msi.webp",
    imageFile: "LaptopImage",
    description: "R7-5800H 16GB DDR4 RX6600M GDDR6 8GB 512GB SSD",
    brand: "Msi",
    category: "Laptop",
    price: 899,
    countInStock: 52,
    numReviews: 21,
  },
  {
    id: 15,
    name: "Hp Pavilion",
    image: "hp2.webp",
    imageFile: "LaptopImage",
    description: "Intel Core I5 10300h Gtx1050",
    brand: "Hp",
    category: "Laptop",
    price: 699,
    countInStock: 38,
    numReviews: 29,
  },
  {
    id: 16,
    name: "Msi Thın",
    image: "msi2.webp",
    imageFile: "LaptopImage",
    description: "I5-10500h 8gb Ram 256gb Ssd Gtx1650",
    brand: "Msi",
    category: "Laptop",
    price: 899.0,
    countInStock: 43,
    numReviews: 46,
  },
  {
    id: 17,
    name: "Samsung Odyssey G3",
    image: "samsung.webp",
    imageFile: "MonitorImage",
    description: " 165hz 1ms Hdmi Dp Freesync VA Black Gaming Monitor",
    brand: "Samsung",
    category: "Monitor",
    price: 499,
    countInStock: 48,
    numReviews: 278,
  },
  {
    id: 18,
    name: "Rampage Black Eagle",
    image: "rampage.webp",
    imageFile: "MonitorImage",
    description:
      " 27 Fhd 165hz Ips Panel Vga + Hdmi * 2 + Dp Flat Pc Player Monitor",
    brand: "Rampage",
    category: "Monitor",
    price: 399,
    countInStock: 59,
    numReviews: 228,
  },
  {
    id: 19,
    name: "Philips B242e1gsj",
    image: "philips.webp",
    imageFile: "MonitorImage",
    description: " 144hz 1ms Hdmi+dp Freesync Fullhd Va Gaming Monitor",
    brand: "Philips",
    category: "Monitor",
    price: 369,
    countInStock: 85,
    numReviews: 218,
  },
  {
    id: 20,
    name: "Gamebooster Gb-2461cf",
    image: "gamebooster.webp",
    imageFile: "MonitorImage",
    description: " 144hz 1ms Curved Freesync Fhd 2xhdmi 1xdp Gaming Monitor",
    brand: "Gamebooster",
    category: "Monitor",
    price: 339,
    countInStock: 106,
    numReviews: 315,
  },
  {
    id: 21,
    name: "Dell P2720d",
    image: "dell.jpg",
    imageFile: "MonitorImage",
    description: " 60hz 8ms (hdmi+display) Qhd Ips Monitor",
    brand: "Dell",
    category: "Monitor",
    price: 799,
    countInStock: 106,
    numReviews: 315,
  },
  {
    id: 22,
    name: "ViewSonic Va2432-h",
    image: "viewSonic.webp",
    imageFile: "MonitorImage",
    description: " 4ms, 75hz, Analog, Hdmi, Ips Led, Monitor",
    brand: "ViewSonic",
    category: "Monitor",
    price: 339,
    countInStock: 148,
    numReviews: 267,
  },
  {
    id: 23,
    name: "Asus TUF Gaming VG27VQ",
    image: "asus.webp",
    imageFile: "MonitorImage",
    description:
      " 165 Hz 1ms (HDMI+Display+DVI-D) FreeSync Full HD Curved Monitor",
    brand: "Asus",
    category: "Monitor",
    price: 599,
    countInStock: 192,
    numReviews: 272,
  },
  {
    id: 24,
    name: "Monster Aryond A32",
    image: "monster.webp",
    imageFile: "MonitorImage",
    description: "165hz 1ms (hdmi+display) G-sync Qhd Led Monitor",
    brand: "Monster",
    category: "Monitor",
    price: 899,
    countInStock: 158,
    numReviews: 279,
  },
  {
    id: 28,
    name: " C11 2021",
    image: "realme.webp",
    imageFile: "PhoneImage",
    description: "32GB Blue Mobile Phone",
    brand: "Realme",
    category: "Phone",
    price: 599,
    countInStock: 105,
    numReviews: 473,
  },
  {
    id: 32,
    name: "50AU7000",
    image: "samsung.webp",
    imageFile: "TelevisionImage",
    description:
      "125 Screen Crystal 4K Ultra HD Smart LED TV with Satellite Receiver",
    brand: "Samsung",
    category: "Television",
    price: 899,
    countInStock: 126,
    numReviews: 137,
  },
  {
    id: 33,
    name: "Apple iPhone 11",
    image: "iPhone.webp",
    imageFile: "PhoneImage",
    description: "128GB Box White Cell Phone Without Accessories",
    brand: "Apple",
    category: "Phone",
    price: 1099,
    countInStock: 26,
    numReviews: 486,
  },
  {
    id: 34,
    name: "Xiaomi Redmi 10",
    image: "xiaomi.webp",
    imageFile: "PhoneImage",
    description: "2022 4GB Ram + 64GB Gray Mobile Phone",
    brand: "Xiaomi",
    category: "Phone",
    price: 599,
    countInStock: 46,
    numReviews: 326,
  },
  {
    id: 35,
    name: "Reeder P13 Blue Max Lite",
    image: "reeder.webp",
    imageFile: "PhoneImage",
    description: "Reeder P13 Blue Max Lite 2022 32 GB",
    brand: "Reeder",
    category: "Phone",
    price: 399,
    countInStock: 88,
    numReviews: 541,
  },
  {
    id: 36,
    name: "Realme C11 2021",
    image: "realme.webp",
    imageFile: "PhoneImage",
    description: "32GB Blue Mobile Phone",
    brand: "Realme",
    category: "Phone",
    price: 599,
    countInStock: 105,
    numReviews: 473,
  },
  {
    id: 37,
    name: "Samsung Galaxy A32",
    image: "samsung.webp",
    imageFile: "PhoneImage",
    description: "128GB Purple Mobile Phone",
    brand: "Samsung",
    category: "Phone",
    price: 999,
    countInStock: 124,
    numReviews: 468,
  },
  {
    id: 38,
    name: "Oppo A16",
    image: "oppo.webp",
    imageFile: "PhoneImage",
    description: "3GB+32GB Black Mobile Phone",
    brand: "Oppo",
    category: "Phone",
    price: 599,
    countInStock: 144,
    numReviews: 368,
  },
  {
    id: 39,
    name: "Poco X4",
    image: "poco.webp",
    imageFile: "PhoneImage",
    description: "8gb+256gb Black Mobile Phone X4 Pro",
    brand: "Poco",
    category: "Phone",
    price: 899,
    countInStock: 153,
    numReviews: 248,
  },
  {
    id: 40,
    name: "Tecno Pova 3",
    image: "tecno.webp",
    imageFile: "PhoneImage",
    description: "128 Gb 6+5 Gb Ram-128gb Blue",
    brand: "Tecno",
    category: "Phone",
    price: 499,
    countInStock: 182,
    numReviews: 378,
  },
  {
    id: 41,
    name: "Onvo OV32150",
    image: "onvo.webp",
    imageFile: "TelevisionImage",
    description: "81 Screen HD Ready Smart LED TV with Satellite Receiver",
    brand: "Onvo",
    category: "Television",
    price: 499,
    countInStock: 33,
    numReviews: 48,
  },
  {
    id: 42,
    name: "Regal 50R754U",
    image: "regal.webp",
    imageFile: "TelevisionImage",
    description: "126 Screen 4K Ultra HD Smart LED TV with Satellite Receiver",
    brand: "Regal",
    category: "Television",
    price: 699,
    countInStock: 43,
    numReviews: 72,
  },
  {
    id: 43,
    name: "Vestel 50U9600",
    image: "vestel.webp",
    imageFile: "TelevisionImage",
    description:
      "127 Screen Satellite Receiver 4K Ultra HD Smart LED TV TV-U9600",
    brand: "Vestel",
    category: "Television",
    price: 799,
    countInStock: 92,
    numReviews: 102,
  },
  {
    id: 44,
    name: "Sunny SN55UAL402",
    image: "sunny.webp",
    imageFile: "TelevisionImage",
    description: "139 Screen 4K Ultra HD Smart LED TV with Satellite Receiver",
    brand: "Sunny",
    category: "Television",
    price: 699,
    countInStock: 105,
    numReviews: 115,
  },
  {
    id: 45,
    name: "Samsung 50AU7000",
    image: "samsung.webp",
    imageFile: "TelevisionImage",
    description:
      "125 Screen Crystal 4K Ultra HD Smart LED TV with Satellite Receiver",
    brand: "Samsung",
    category: "Television",
    price: 899,
    countInStock: 126,
    numReviews: 137,
  },
  {
    id: 46,
    name: "Toshiba 50UA2063DT",
    image: "toshiba.webp",
    imageFile: "TelevisionImage",
    description:
      "127 Screen 4K Ultra HD Smart Android LED TV with Satellite Receiver",
    brand: "Toshiba",
    category: "Television",
    price: 599,
    countInStock: 146,
    numReviews: 158,
  },
  {
    id: 47,
    name: "Grundig GEU 7830",
    image: "grundig.jpg",
    imageFile: "TelevisionImage",
    description: "109 Screen 4K Ultra HD Smart LED TV with Satellite Receiver",
    brand: "Grundig",
    category: "Television",
    price: 499,
    countInStock: 153,
    numReviews: 188,
  },
  {
    id: 48,
    name: "Regal 50R754UA9",
    image: "regal.png",
    imageFile: "TelevisionImage",
    description:
      "126 Screen 4K Ultra HD Android Smart LED TV with Satellite Receiver",
    brand: "Regal",
    category: "Television",
    price: 699,
    countInStock: 184,
    numReviews: 167,
  },
];

export default ProductsData;
