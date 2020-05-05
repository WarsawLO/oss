---
id: getting-started
title: 'Points Calculator - Getting started'
sidebar_label: 'Getting started'
---

## Installation

Install Points Calculator
```bash
yarn add @warsawlo/points-calculator
```
or
```bash
npm i -S @warsawlo/points-calculator
```

## Basic usage

```typescript
import { PointsCalculator, configs } from '@warsawlo/points-calculator';
const { config2018_2019 } = configs;

const Calc = new PointsCalculator(config2018_2019);

Calc.setGrades({
	polish: 6,
	math: 4
});

Calc.setExamResult({
	polish: .95
});

console.log(Calc.points);

Calc.watch().subscribe(points => {});

setTimeout(() => Calc.setMerit(true), 1000);
```

