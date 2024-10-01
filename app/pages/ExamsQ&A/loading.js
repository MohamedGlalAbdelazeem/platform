export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="loader mb-4"></div>
      
      <p className="text-xl font-semibold text-btnColored animate-pulse">
        Loading...
      </p>
      
      <p className="mt-2 text-sm text-gray-500">
        Please wait while we load the content.
      </p>
    </div>
  );
}
