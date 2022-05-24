import {Vector3} from 'three';
import Attackers from './Attackers';

const Spawner = (props) => {
	// TODO No permite usar los valores de useContext fuera del componente Spawner. Y si esta dentro, no permite exportarlo

	return (
		<group>
			<Attackers
				pos={new Vector3(-2, 2, 0)}
				wait={30}
				color='orange'
				setplay={props.setplay}
				play={props.play}
			/>
			<Attackers
				pos={new Vector3(0, 2, 0)}
				wait={40}
				color='orange'
				setplay={props.setplay}
				play={props.play}
			/>
			<Attackers
				pos={new Vector3(2, 2, 0)}
				wait={20}
				color='orange'
				setplay={props.setplay}
				play={props.play}
			/>

			<Attackers
				pos={new Vector3(-2, 0, 0)}
				wait={10}
				color='orange'
				setplay={props.setplay}
				play={props.play}
			/>

			<Attackers
				pos={new Vector3(0, 0, 0)}
				wait={15}
				color='yellow'
				setplay={props.setplay}
				play={props.play}
			/>
			<Attackers
				pos={new Vector3(0, 0, 0)}
				wait={30}
				color='yellow'
				setplay={props.setplay}
				play={props.play}
			/>
			<Attackers
				pos={new Vector3(0, 0, 0)}
				wait={60}
				color='yellow'
				setplay={props.setplay}
				play={props.play}
			/>
			<Attackers
				pos={new Vector3(0, 0, 0)}
				wait={90}
				color='yellow'
				setplay={props.setplay}
				play={props.play}
			/>
			<Attackers
				pos={new Vector3(0, 0, 0)}
				wait={120}
				color='yellow'
				setplay={props.setplay}
				play={props.play}
			/>

			<Attackers
				pos={new Vector3(2, 0, 0)}
				wait={50}
				color='orange'
				setplay={props.setplay}
				play={props.play}
			/>

			<Attackers
				pos={new Vector3(0, -2, 0)}
				wait={70}
				color='orange'
				setplay={props.setplay}
				play={props.play}
			/>
			<Attackers
				pos={new Vector3(2, -2, 0)}
				wait={80}
				color='orange'
				setplay={props.setplay}
				play={props.play}
			/>
			<Attackers
				pos={new Vector3(-2, -2, 0)}
				wait={120}
				color='orange'
				setplay={props.setplay}
				play={props.play}
			/>
		</group>
	);
};

export default Spawner;
