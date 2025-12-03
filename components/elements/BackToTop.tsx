
interface BackToTopProps {
  scroll: boolean;
}

export default function BackToTop({ scroll }: BackToTopProps) {
  return (
    <>
      {scroll && (
        <a href="#" className="back-to-top">
          <i className="far fa-angle-up"></i>
        </a>
      )}
    </>
  );
}