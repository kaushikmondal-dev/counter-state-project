"use client";

import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";

const BasicCounter = () => {
	//let count = 10;

	const [count, setCount] = useState(10);

	const plus = () => {
		//count = count + 1;
		setCount(count + 1);
	};

	const minus = () => {
		//count = count - 1;
		setCount(count - 1);
	};

	return (
		<CardContent className="text-center">
			<div>Counter Value {count}</div>
			<div className="grid grid-cols-2 gap-4 pt-4">
				<Button
					onClick={minus}
					className="cursor-pointer px-4"
					variant={"destructive"}>
					<CircleMinusIcon />
					Minus 1
				</Button>
				<Button
					onClick={plus}
					className="cursor-pointer px-4"
					variant={"default"}>
					<CirclePlusIcon />
					Plus 1
				</Button>
			</div>
		</CardContent>
	);
};

export default BasicCounter;
