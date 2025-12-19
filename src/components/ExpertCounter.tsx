"use client";

import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";

const ExpertCounter = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		//count = count + 1;
		setCount(count + 1);
	};

	const minus = () => {
		//count = count - 1;
		setCount(count - 1);
	};
	const plusTen = () => {
		//count = count + 1;
		setCount(count + 10);
	};

	const minusTen = () => {
		//count = count - 1;
		setCount(count - 10);
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
				<Button
					onClick={minusTen}
					className="cursor-pointer px-4"
					variant={"destructive"}>
					<CircleMinusIcon />
					Minus 10
				</Button>
				<Button
					onClick={plusTen}
					className="cursor-pointer px-4"
					variant={"default"}>
					<CirclePlusIcon />
					Plus 10
				</Button>
			</div>
		</CardContent>
	);
};

export default ExpertCounter;
