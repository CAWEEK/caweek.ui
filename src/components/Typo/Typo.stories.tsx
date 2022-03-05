import React from 'react';
import styled from '@emotion/styled';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typo from '.';

export default {
	title: 'caweek-ui/Typography',
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		color: {
			options: [
				'purple10',
				'purple20',
				'purple30',
				'purple40',
				'purple50',
				'darkPurple10',
				'orange',
				'red',
				'pink',
				'green',
				'white',
				'grey10',
				'grey20',
				'grey30',
				'grey40',
				'grey50',
				'grey60',
				'grey70',
				'grey80',
				'grey90',
				'blueGrey10',
				'blueGrey20',
				'purpleGrey10',
			],
			control: { type: 'select' },
		},
		font: {
			options: [
				'headline1',
				'headline2',
				'headline3',
				'headline4',
				'subhead4',
				'subhead3',
				'subhead2',
				'subhead1',
				'body3',
				'body2',
				'body1',
			],
			control: { type: 'select' },
		},
		isClickable: {
			control: { type: 'boolean' },
		},
	},
} as ComponentMeta<typeof Typo>;

const Template: ComponentStory<typeof Typo> = ({ children, color, font, isClickable }) => (
	<Typo color={color} font={font} isClickable={isClickable}>
		{children}
	</Typo>
);

const ListTemplate = () => {
	const TypoWrapper = styled.div`
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		& > div + div {
			margin-top: 2rem;
		}
	`;

	const InnerWrapper = styled.div`
		display: flex;
		align-items: center;
		padding: 0 20px;
		border-radius: 10px;
		border: 1px solid #e4e4e5;
		box-shadow: 0px 5.86471px 13.1956px -4.39853px rgba(80, 103, 136, 0.12),
			0px 8.79706px 30.7897px -2.93235px rgba(80, 103, 136, 0.12);

		& > p {
			margin-right: 150px;
		}
	`;

	const TitleWrapper = styled.p`
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	`;

	const Title = styled.h1`
		font-style: normal;
		font-weight: bold;
		font-size: 20px;
		line-height: 30px;
		letter-spacing: -0.6px;
		margin: 0;
		color: #000000;
	`;

	const SubTitle = styled.h2`
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 22px;
		letter-spacing: -0.6px;
		margin: 0;
		color: #8b8b8b;
	`;

	return (
		<TypoWrapper>
			<InnerWrapper>
				<TitleWrapper>
					<Title>Headline4</Title>
					<SubTitle>
						40px | 52px <br /> Bold
					</SubTitle>
				</TitleWrapper>
				<Typo color="grey90" font="headline4">
					가볍게 시작하는 나만의 회고, Caweek
				</Typo>
			</InnerWrapper>
			<InnerWrapper>
				<TitleWrapper>
					<Title>Headline3</Title>
					<SubTitle>
						36px | 46px <br /> Bold
					</SubTitle>
				</TitleWrapper>
				<Typo color="grey90" font="headline3">
					가볍게 시작하는 나만의 회고, Caweek
				</Typo>
			</InnerWrapper>
			<InnerWrapper>
				<TitleWrapper>
					<Title>Headline2</Title>
					<SubTitle>
						32px | 42px <br /> Bold
					</SubTitle>
				</TitleWrapper>
				<Typo color="grey90" font="headline2">
					가볍게 시작하는 나만의 회고, Caweek
				</Typo>
			</InnerWrapper>
			<InnerWrapper>
				<TitleWrapper>
					<Title>Headline1</Title>
					<SubTitle>
						24px | 34px <br /> Bold
					</SubTitle>
				</TitleWrapper>
				<Typo color="grey90" font="headline1">
					가볍게 시작하는 나만의 회고, Caweek
				</Typo>
			</InnerWrapper>
			<InnerWrapper>
				<TitleWrapper>
					<Title>Subhead4</Title>
					<SubTitle>
						20px | 30px <br /> Bold
					</SubTitle>
				</TitleWrapper>
				<Typo color="grey90" font="subhead4">
					가볍게 시작하는 나만의 회고, Caweek
				</Typo>
			</InnerWrapper>
			<InnerWrapper>
				<TitleWrapper>
					<Title>Subhead3</Title>
					<SubTitle>
						16px | 22px <br /> Bold
					</SubTitle>
				</TitleWrapper>
				<Typo color="grey90" font="subhead3">
					가볍게 시작하는 나만의 회고, Caweek
				</Typo>
			</InnerWrapper>
			<InnerWrapper>
				<TitleWrapper>
					<Title>Subhead2</Title>
					<SubTitle>
						14px | 20px <br /> Bold
					</SubTitle>
				</TitleWrapper>
				<Typo color="grey90" font="subhead2">
					가볍게 시작하는 나만의 회고, Caweek
				</Typo>
			</InnerWrapper>
			<InnerWrapper>
				<TitleWrapper>
					<Title>Subhead1</Title>
					<SubTitle>
						12px | 18px <br /> Bold
					</SubTitle>
				</TitleWrapper>
				<Typo color="grey90" font="subhead1">
					가볍게 시작하는 나만의 회고, Caweek
				</Typo>
			</InnerWrapper>
			<InnerWrapper>
				<TitleWrapper>
					<Title>Body3</Title>
					<SubTitle>
						16px | 24px <br /> Regular
					</SubTitle>
				</TitleWrapper>
				<Typo color="grey90" font="body3">
					가볍게 시작하는 나만의 회고, Caweek
				</Typo>
			</InnerWrapper>
			<InnerWrapper>
				<TitleWrapper>
					<Title>Body2</Title>
					<SubTitle>
						14px | 22px <br /> Regular
					</SubTitle>
				</TitleWrapper>
				<Typo color="grey90" font="body2">
					가볍게 시작하는 나만의 회고, Caweek
				</Typo>
			</InnerWrapper>
			<InnerWrapper>
				<TitleWrapper>
					<Title>Body1</Title>
					<SubTitle>
						12px | 18px <br /> Regular
					</SubTitle>
				</TitleWrapper>
				<Typo color="grey90" font="body1">
					가볍게 시작하는 나만의 회고, Caweek
				</Typo>
			</InnerWrapper>
		</TypoWrapper>
	);
};

export const typography = Template.bind({});
typography.args = {
	children: '가볍게 시작하는 나만의 회고, Caweek',
	color: 'grey90',
	font: 'body3',
	isClickable: false,
};

export const typographyList = ListTemplate.bind({});
