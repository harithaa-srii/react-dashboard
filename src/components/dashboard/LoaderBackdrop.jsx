export default function LoaderBackdrop() {
  return (
    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
