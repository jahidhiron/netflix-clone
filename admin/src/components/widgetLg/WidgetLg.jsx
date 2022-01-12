import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return (
      <button type={type} className={"widgetLgButton " + type}>
        {type}
      </button>
    );
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>

      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                className="widgetLgImg"
                src="https://avatoon.me/wp-content/uploads/2020/07/Cartoon-Pic-Ideas-for-DP-Profile-09.png"
                alt="widgetSmImg"
              />
              <span className="widgetLgName">Sadman Sakib</span>
            </td>

            <td className="widgetLgDate">2 Jan 1999</td>
            <td className="widgetLgAmount">$2256</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                className="widgetLgImg"
                src="https://www.drupal.org/files/user-pictures/picture-2204516-1469808304.png"
                alt="widgetSmImg"
              />
              <span className="widgetLgName">Sadman Sakib</span>
            </td>

            <td className="widgetLgDate">2 Jan 1999</td>
            <td className="widgetLgAmount">$2256</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                className="widgetLgImg"
                src="https://gocartoonme.com/wp-content/uploads/cartoon-avatar.png"
                alt="widgetSmImg"
              />
              <span className="widgetLgName">Sadman Sakib</span>
            </td>

            <td className="widgetLgDate">2 Jan 1999</td>
            <td className="widgetLgAmount">$2256</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                className="widgetLgImg"
                src="https://www.pngitem.com/pimgs/m/528-5286598_all-photo-png-clipart-male-teacher-clipart-png.png"
                alt="widgetSmImg"
              />
              <span className="widgetLgName">Sadman Sakib</span>
            </td>

            <td className="widgetLgDate">2 Jan 1999</td>
            <td className="widgetLgAmount">$2256</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
