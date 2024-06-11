import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import CreateProductForm from '@/components/dashboard/CreateProductForm';
import Sidebar from '@/components/sidebar/Sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Link } from 'react-router-dom';

const BREADCRUMBS = [
    { id: 1, name: 'Dashboard', href: '/sell' },
    { id: 2, name: 'My-Products', href: '/sell/my-products' },
    { id: 3, name: 'Create', href: '/sell/my-products/create' }
];

const CreateProducts = () => {
    return (
        <div className="flex min-h-screen w-full flex-row">
            <TooltipProvider>
                <Sidebar />
            </TooltipProvider>
            <div className="p-6 flex flex-col w-full">
                <ol className="flex items-center space-x-2 py-2 mb-2">
                    {BREADCRUMBS.map((breadcrumb, i) => (
                        <li key={breadcrumb.href}>
                            <div className="flex items-center text-sm">
                                <Link
                                    to={breadcrumb.href}
                                    className="font-medium text-sm text-muted-foreground hover:text-gray-900 hover:dark:text-white"
                                >
                                    {breadcrumb.name}
                                </Link>
                                {i !== BREADCRUMBS.length - 1 ? (
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                                    >
                                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                    </svg>
                                ) : null}
                            </div>
                        </li>
                    ))}
                </ol>
                <CreateProductForm />
            </div>
        </div>
    );
};

export default CreateProducts;
