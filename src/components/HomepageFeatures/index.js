import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facile à utiliser',
    Svg: require('@site/static/img/planner.svg').default,
    description: (
      <>
        Il est fait pour créer rapidement un calendrier. Il offre une interface intuitive, permettant de naviguer facilement entre les dates et événements.
      </>
    ),
  },
  {
    title: 'Personnalisable',
    Svg: require('@site/static/img/planner.svg').default,
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
        Il permet d'adapter l'apparence et les fonctionnalités du
        calendrier à leurs besoins spécifiques
      </>
    ),
  },
  {
    title: 'Flexible',
    Svg: require('@site/static/img/planner.svg').default,
    description: (
      <>
        {/* Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer. */}
       Il peut être intégré dans divers projets et plateformes.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
