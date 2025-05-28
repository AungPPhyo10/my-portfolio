export default function Layout({ children }) {
  return (
    <div>
      <div className="flex justify-center lg:mx-8 mx-6 mt-4">
        {children}
      </div>
    </div>
  );
}
