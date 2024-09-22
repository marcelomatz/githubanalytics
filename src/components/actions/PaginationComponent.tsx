import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const maxPages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  const endPage = Math.min(totalPages, startPage + maxPages - 1);

  return (
    <Pagination className="">
      <PaginationContent className="">
        <PaginationItem>
          <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => {
          if (index + 1 < startPage || index + 1 > endPage) {
            return null;
          }
          return (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => onPageChange(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        {totalPages > maxPages && endPage < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;