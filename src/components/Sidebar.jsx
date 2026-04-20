import styles from './Sidebar.module.css';

export default function Sidebar({ isOpen }) {
  const categories = [
    { name: "Home", icon: "🏠" },
    { name: "Popular", icon: "📈" },
    { name: "All", icon: "🌐" },
  ];

  const communities = [
    "r/programming",
    "r/webdev",
    "r/reactjs",
    "r/javascript",
    "r/css",
  ];

  console.log("Sidebar rendering, isOpen:", isOpen);

  return (
    <aside className={`${styles.sidebar} ${!isOpen ? styles.closed : ""}`}>
      <div className={styles.sidebarSection}>
        <ul className={styles.sidebarList}>
          {categories.map((cat) => (
            <li key={cat.name} className={styles.sidebarItem}>
              <span className={styles.sidebarIcon}>{cat.icon}</span>
              <span className={styles.sidebarLabel}>{cat.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className={styles.sidebarDivider} />

      <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarSectionTitle}>Communities</h3>
        <ul className={styles.sidebarList}>
          {communities.map((sub) => (
            <li key={sub} className={styles.sidebarItem}>
              <span className={styles.sidebarIcon}>📁</span>
              <span className={styles.sidebarLabel}>{sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}