import React, { PureComponent } from 'react';
import { Clearfix, Grid } from "react-bootstrap";

import styles from './Calendar.module.css';

import intro6 from '../images/intro/6.jpg';
import Page from "../Page/Page";

export default class Calendar extends PureComponent {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        backgroundSrc={intro6}
        title="Calendar"
      >
        <div className={styles.calendarBody}>
          <Grid bsClass="container" className={styles.calendarContainer}>
            <h2 className={styles.header}>Upcoming Events</h2>
            <Clearfix visibleXsBlock>
              <iframe
                title="extra small calendar"
                src="https://www.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fairviewrobotics%40gmail.com&amp;color=%23060D5E&amp;ctz=America%2FDenver"
                className={styles.calendar} width="100%" height="300" frameBorder="0" scrolling="no"/>
            </Clearfix>
            <Clearfix visibleSmBlock>
              <iframe
                title="small calendar"
                src="https://www.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;showPrint=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fairviewrobotics%40gmail.com&amp;color=%23711616&amp;ctz=America%2FDenver"
                className={styles.calendar} width="100%" height="400" frameBorder="0" scrolling="no"/>
            </Clearfix>
            <Clearfix visibleMdBlock>
              <iframe
                title="medium calendar"
                src="https://www.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;showPrint=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fairviewrobotics%40gmail.com&amp;color=%23711616&amp;ctz=America%2FDenver"
                className={styles.calendar} width="90%" height="400" frameBorder="0" scrolling="no"/>
            </Clearfix>
            <Clearfix visibleLgBlock>
              <iframe
                title="large calendar"
                src="https://www.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;showPrint=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fairviewrobotics%40gmail.com&amp;color=%23711616&amp;ctz=America%2FDenver"
                className={styles.calendar} width="80%" height="500" frameBorder="0" scrolling="no"/>
            </Clearfix>
          </Grid>
        </div>
      </Page>
    );
  }
}
