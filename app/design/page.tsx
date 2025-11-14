import styles from './page.module.css';

export default function DesignPage() {
  return (
    <main className={styles.container}>
      
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>Reciply</h1>
        </div>
        <p className={styles.subtitle}>
          אפליקציה חברתית לבישול ושיתוף מתכונים, שמחברת בין עולם המטבח לשיחות ולאנשים - חוויה שיתופית, מיידית ונגישה.
        </p>
      </header>

      {/* All Sections */}
      <div className={styles.sectionsWrapper}>

        {/* Section 1: Background */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>רקע</h2>

          <div className={styles.bulletPoints}>
            <div className={styles.bulletItem}>
              <div className={styles.icon}>
                <img src="/images-from-figma/icons/Vector.png" alt="" />
              </div>
              <p>כיום מתכונים מפוזרים בין אתרים, קבוצות, אינסטגרם וטיקטוק. החוויה לא מרוכזת ולא מותאמת למובייל.</p>
            </div>

            <div className={styles.bulletItem}>
              <div className={styles.icon}>
                <img src="/images-from-figma/icons/Vector (1).png" alt="" />
              </div>
              <p>המטרה שלנו היא לאחד את החוויה הקולינרית והחברתית במקום אחד - לא רק לקרוא מתכונים, אלא לשתף, לשאול וליצור קהילה.</p>
            </div>
          </div>

          <img
            src="/images-from-figma/image30.png"
            alt="App preview"
            className={styles.sectionImage}
          />
        </section>

        {/* Section 2: App Structure */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>מבנה האפליקציה</h2>

          <div className={styles.structureBoxes}>
            
            <div className={styles.structureBox}>
              <div className={styles.boxHeader}>
                <h4>קבוצות קהילה</h4>
                <div className={styles.boxIcon}>
                  <img src="/images-from-figma/icons/Vector (2).png" alt="" />
                </div>
              </div>
              <p>המשתמשים משתפים תמונות, שואלים שאלות, מגיבים</p>
            </div>

            <div className={styles.structureBox}>
              <div className={styles.boxHeader}>
                <h4>קבוצות תוכן</h4>
                <div className={styles.boxIcon}>
                  <img src="/images-from-figma/icons/Vector (3).png" alt="" />
                </div>
              </div>
              <p>משפיענים ושפים מפרסמים מתכונים, עדכונים, טיפים והמלצות</p>
            </div>

          </div>

          <p className={styles.exampleNote}>
            לדוגמה: &quot;דניאל עמית x אייל שני - אוכל איטלקי&quot; (תוכן) לצד &quot;קהילת האוכל האיטלקי&quot; (קהילה)
          </p>

          <div className={styles.foodGrid}>
            <div className={styles.foodCard}>
              <img src="/images-from-figma/image27.png" alt="Food 1" />
            </div>
            <div className={styles.foodCard}>
              <img src="/images-from-figma/image26.png" alt="Food 2" />
            </div>
            <div className={styles.foodCard}>
              <img src="/images-from-figma/image21.png" alt="Food 3" />
            </div>
            <div className={styles.foodCard}>
              <img src="/images-from-figma/image22.png" alt="Food 4" />
            </div>
            <div className={styles.foodCard}>
              <img src="/images-from-figma/image23.png" alt="Food 5" />
            </div>
            <div className={styles.foodCard}>
              <img src="/images-from-figma/image29.png" alt="Food 6" />
            </div>
            <div className={styles.foodCard}>
              <img src="/images-from-figma/image20.png" alt="Food 7" />
            </div>
            <div className={styles.foodCard}>
              <img src="/images-from-figma/image27.png" alt="Food 8" />
            </div>
          </div>
        </section>

        {/* Section 3: Audience and Context */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>קהל יעד וקונטקסט שימוש</h2>

          <h3 className={styles.subsectionTitle}>קהל יעד</h3>

          <div className={styles.audienceGrid}>
            <div className={styles.audienceCard}>
              <h4>קהילות</h4>
              <p>קבוצות וקהילות בישול בעלות תחום עניין משותף</p>
            </div>

            <div className={styles.audienceCard}>
              <h4>משפיענים</h4>
              <p>שפים ומשפיענים המעוניינים לבנות קהילה סביב תוכנם</p>
            </div>

            <div className={styles.audienceCard}>
              <h4>חובבים</h4>
              <p>חובבי בישול המחפשים השראה ומתכונים חדשים.</p>
            </div>
          </div>

          <h3 className={styles.subsectionTitle}>קונטקסט שימוש</h3>

          <div className={styles.contextBoxes}>

            <div className={styles.contextBox}>
              <p>קבוצות קהילה (בזמן הבישול)</p>
              <div className={styles.boxIcon}>
                <img src="/images-from-figma/icons/Vector (4).png" alt="" />
              </div>
            </div>

            <div className={styles.contextBox}>
              <p>מחוץ לבית (קניות, השראה)</p>
              <div className={styles.boxIcon}>
                <img src="/images-from-figma/icons/Vector (5).png" alt="" />
              </div>
            </div>

          </div>

          <img
            src="/images-from-figma/image25.png"
            alt="Context example"
            className={styles.contextImage}
          />
        </section>

      </div>
    </main>
  );
}
