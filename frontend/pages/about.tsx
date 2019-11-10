import { Nav } from '../components/nav';
import { Top } from '../components/top';
import { Footer } from '../components/footer';

const About = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Top />
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Nav />
        <div style={{width: 'calc(100% - 290px)', paddingTop: '10px'}}>
          <h1 className="title">
            Hi, we are the champions.!
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
