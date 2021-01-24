import EnterButton from '../../../../components/common/button/button';
import './projectVisual.scss';

interface ProjectVisual {
  wrapperElement: HTMLDivElement;
}

class ProjectVisual implements ProjectVisual {
  constructor(props: {
    data: { id: string; title: string; desc: string };
    url: { url: string; title: string };
  }) {
    const { data, url } = props;
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.id = data.id;
    this.wrapperElement.classList.add('visaul-items');
    const button = new EnterButton({ url, text: 'ENTER' }).instance;
    console.log({ button, data });
  }

  get instance() {
    return this.wrapperElement;
  }
}

export default ProjectVisual;
