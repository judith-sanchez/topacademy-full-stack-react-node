import styles from './styles/MyComponent.module.css';

const MyComponent: React.FC = () => {
	return (
		<form className={styles.myComponent}>
			<input type="text" />
			<input type="text" />
		</form>
	);
};

export default MyComponent;
