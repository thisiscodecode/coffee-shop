import { Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-white/70 py-8 sm:py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5 text-amber-400" />
            <span className="text-white font-bold text-base sm:text-lg">Coffee Glacé</span>
          </div>
          <p className="text-[10px] sm:text-xs text-white/40 text-center">
            تمامی حقوق مادی و معنوی این وب‌سایت متعلق به Coffee Glacé می‌باشد.
          </p>
        </div>
      </div>
    </footer>
  );
}
