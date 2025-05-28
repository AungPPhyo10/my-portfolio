export default function Layout({ children }) {
  return (
    <div>
      <div className="container lg:mx-8 mx-5 mt-4">
        {children}
        </div>
    </div>
  );
}
