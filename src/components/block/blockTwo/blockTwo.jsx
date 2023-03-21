import Styles from "@/components/block/blockTwo/blockTwo.module.scss";
export default function blockTwo(props) {
  return (
    <>
      <div className={`${Styles.block} ${Styles.blockTwo}`} style={props.style}>
        {props.title && (
          <div className={Styles.block_header}>
            <h3 className={Styles.block_title}>{props.title}</h3>
            <p className={`${Styles.block_desc} text-muted`}>{props.desc}</p>
          </div>
        )}

        {/* block_body */}
        <div className={`${Styles.block_body}`}>{props.children}</div>
        {/* block_body end */}
      </div>
    </>
  );
}
