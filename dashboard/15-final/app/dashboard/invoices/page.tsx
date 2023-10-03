import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/invoices/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Table from '@/app/ui/invoices/table';
import { fetchFilteredInvoices } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';

export default async function Page({
  searchParams,
}: {
  searchParams:
    | {
        query: string | undefined;
        page: string | undefined;
      }
    | undefined;
}) {
  const query = searchParams?.query || '';
  const currentPage = query ? 1 : Number(searchParams?.page || '1');

  const { invoices, totalPages } = await fetchFilteredInvoices(
    query,
    currentPage,
  );

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
        <span className="hidden md:block">
          <CreateInvoice />
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search />
        <span className="hidden md:block">
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </span>
        <span className="md:hidden">
          <CreateInvoice />
        </span>
      </div>
      <Table invoices={invoices} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
}
