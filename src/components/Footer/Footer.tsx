import styles from "./Footer.module.css";

const Footer = ({
  onLoadMoreClick,
  isLoading,
}: {
  onLoadMoreClick: () => void;
  isLoading: boolean;
}) => {
  return (
    <footer className={styles.FooterContainer}>
      <button
        onClick={onLoadMoreClick}
        className={styles.LoadMoreButton}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Load more"}
      </button>
    </footer>
  );
};

export default Footer;
