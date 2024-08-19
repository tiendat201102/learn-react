import React from 'react';
import { ChevronRight, Search, ShoppingCart, User } from 'lucide-react';

export default function RiceLandingPage() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-green-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="font-bold">TRANG CHỦ</a>
            <a href="#">GIỚI THIỆU</a>
            <a href="#">SẢN PHẨM</a>
            <a href="#">LIÊN HỆ</a>
          </div>
          <div className="flex space-x-4">
            <Search />
            <ShoppingCart />
            <User />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-96">
        <img src="/api/placeholder/1200/400" alt="Rice field" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Vùng Đất Lúa Gạo Tươi Tốt<br />Sông Cửu Long</h1>
            <p className="mb-4">Nông nghiệp vùng Sông Cửu Long - nơi trái tim của chúng tôi đập cùng nhịp với ruộng đồng</p>
            <div className="space-x-4">
              <button className="bg-green-600 px-6 py-2 rounded">Mua Ngay</button>
              <button className="border border-white px-6 py-2 rounded">Liên Hệ</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-12">
        <div className="flex space-x-8">
          <div className="w-1/2">
            <img src="/api/placeholder/600/400" alt="Hands holding rice" className="w-full h-64 object-cover rounded" />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">Sự Đặc Biệt Của Lúa Gạo Vùng Đồng Bằng Sông Cửu Long</h2>
            <p className="mb-4">Đồng bằng Sông Cửu Long, nơi tạo ra những hạt gạo thơm ngon, chất lượng cao và đậm đà hương vị. Với điều kiện tự nhiên thuận lợi và kỹ thuật canh tác tiên tiến, chúng tôi tự hào mang đến cho bạn những sản phẩm gạo tốt nhất.</p>
            <a href="#" className="text-green-600 flex items-center">
              Tìm Hiểu Thêm <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Những Điểm Nổi Bật</h2>
          <div className="grid grid-cols-4 gap-8">
            {['Bảo Đảm Chất Lượng', 'Hương Vị Đặc Trưng', 'Gắn Liền Với Bản Sắc', 'Tiêu Chuẩn An Toàn'].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-bold mb-2">{item}</h3>
                <p className="text-sm">Lúa gạo ở vùng đồng bằng Sông Cửu Long luôn đạt tiêu chuẩn chất lượng cao nhất.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefit Section */}
      <section className="container mx-auto py-12">
        <div className="flex space-x-8">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">Sự Kết Hợp Hoàn Mỹ Của Vị Ngon Và Lợi Ích Sức Khỏe</h2>
            <p className="mb-4">Gạo từ vùng Sông Cửu Long không chỉ mang lại hương vị đặc trưng mà còn giàu dinh dưỡng, góp phần vào một chế độ ăn cân bằng và lành mạnh. Với hàm lượng vitamin B, khoáng chất và chất xơ dồi dào, gạo của chúng tôi không chỉ ngon miệng mà còn tốt cho sức khỏe của người tiêu dùng.</p>
            <a href="#" className="text-green-600 flex items-center">
              Tìm Hiểu Thêm <ChevronRight className="ml-2" />
            </a>
          </div>
          <div className="w-1/2">
            <img src="/api/placeholder/600/400" alt="Rice and grains" className="w-full h-64 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Tầm Nhìn Và Sứ Mệnh</h2>
          <p className="mb-8">Chúng tôi cam kết mang đến sự hài lòng cho khách hàng và phát triển bền vững cho vùng đất lúa, kết hợp giữa truyền thống và công nghệ để tạo ra những sản phẩm chất lượng cao và thân thiện với môi trường.</p>
          <div className="flex justify-center space-x-4">
            {[...Array(5)].map((_, i) => (
              <img key={i} src="/api/placeholder/200/150" alt={`Rice farming ${i + 1}`} className="w-48 h-36 object-cover rounded" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}