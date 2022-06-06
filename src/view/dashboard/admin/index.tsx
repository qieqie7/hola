import { Grid } from '@arco-design/web-react';
// import PanelGroup from '../../../components/Dashboard.PanelGroup/PanelGroup';
import LineChart from './components/LineChart';

const { Row, Col } = Grid;

export default function AdminDashboard() {
    return (
        <div>
            {/* <PanelGroup /> */}

            <Row>
                <Col>
                    <LineChart chartData={[]} />
                </Col>
            </Row>

            <Row>
                <Col xs={24} sm={24} xl={8}>
                    <div>6{/* <raddar-chart /> */}</div>
                </Col>
                <Col xs={24} sm={24} xl={8}>
                    <div>7{/* <pie-chart /> */}</div>
                </Col>
                <Col xs={24} sm={24} xl={8}>
                    <div>8{/* <bar-chart /> */}</div>
                </Col>
            </Row>
        </div>
    );
}
