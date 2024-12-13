import Link from 'next/link';

const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <svg
            fill="currentColor"
            width={16}
            height={20}
            viewBox="0 0 16 20"
            aria-hidden="true"
            className="h-5 w-4 text-gray-300 mr-2"
          >
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
          </svg>}
          {item.href ? (
            <Link href={item.href} passHref>
              <p className="mr-2 text-sm font-medium text-gray-900">{item.label}</p>
            </Link>
          ) : (
            <span className="mr-2 text-sm font-medium text-gray-900">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
