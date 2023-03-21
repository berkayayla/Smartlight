import Styles from "@/components/block/blockOne/blockOne.module.scss";
export default function BlockOne(props) {
  return (
    <>
      <div
        className={`${Styles.block} ${Styles.blockOne}`}
        style={{ backgroundImage: `url(${props.bg})`, color: `${props.color}` }}
      >
        {props.icon && (
          <img src={props.icon} className={Styles.icon} alt="Block" />
        )}

        <div className={Styles.detail}>
          <small className={`text-muted`}>{props.label}</small>
          <strong>{props.count}</strong>
        </div>
      </div>
    </>
  );
}
