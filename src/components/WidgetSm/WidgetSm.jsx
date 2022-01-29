import { Visibility } from '@material-ui/icons';
import React from 'react';
import './widgetSm.css';

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" className='widgetSmImage' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jonnathan Espinoza</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton"><Visibility className='widgetSmIcon' /> Display</button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" className='widgetSmImage' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jonnathan Espinoza</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton"><Visibility className='widgetSmIcon' /> Display</button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" className='widgetSmImage' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jonnathan Espinoza</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton"><Visibility className='widgetSmIcon' /> Display</button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" className='widgetSmImage' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jonnathan Espinoza</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton"><Visibility className='widgetSmIcon' /> Display</button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" className='widgetSmImage' />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jonnathan Espinoza</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton"><Visibility className='widgetSmIcon' /> Display</button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSm;
