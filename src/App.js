import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { isTemplateElement } from '@babel/types';

class App extends React.Component {
	state = {
		restaurant: {},
		menu: {},
		isLoading: false
	};

	componentDidMount = async () => {
		const response = await axios.get('https://deliveroo-api.now.sh/menu');
		this.setState({
			restaurant: response.data.restaurant,
			menu: response.data.menu,
			isLoading: true
		});
	};

	render = () => {
		return (
			<div className="Content">
				<header>
					<div className="RestaurantInfos">
						<div className="RestaurantInfos--center">
							<div className="RestaurantInfos--texts">
								<h1>{this.state.restaurant.name}</h1>
								<p>{this.state.restaurant.description}</p>
							</div>
							<img
								className="RestaurantInfos--cover"
								src={this.state.restaurant.picture}
								alt="restaurant cover"
							/>
						</div>
					</div>
				</header>

				<div className="Content">
					<div className="Content--center">
						<div className="Menu">
							<div className="MenuItems">
								{Object.keys(this.state.menu).map((el1, index1) => {
									return (
										<div>
											{this.state.menu[el1].length === 0 ? null : <h2>{el1}</h2>}
											<div className="MenuItems--items">
												{this.state.menu[el1].map((el2, index2) => {
													return (
														<div className="MenuItem">
															<div className="MenuItem--card">
																<div className="MenuItem--texts">
																	<h3>{el2.title}</h3>
																	<p>{el2.description}</p>
																	<div className="MenuItem--infos">
																		<span className="MenuItem--price">25,00 €</span>
																		<span className="MenuItem--popular">
																			<svg
																				xmlns="http://www.w3.org/2000/svg"
																				viewBox="0 0 24 24"
																				fill="#ff8000"
																				className="feather feather-star"
																				style={{
																					width: 20,
																					height: 20,
																					marginRight: 5
																				}}
																			>
																				<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
																			</svg>{' '}
																			Populaire
																		</span>
																	</div>
																</div>
																<div className="MenuItem--picture">
																	{el2.picture ? <img src={el2.picture} alt /> : null}
																</div>
															</div>
														</div>
													);
												})}
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<div className="Cart">
							<div className="Cart--card">
								<button className="Cart--validate">Valider mon panier</button>
								<div>
									<div className="Cart--items">
										<div className="Cart--line">
											<div className="Cart--counter">
												<span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
														className="feather feather-plus-circle"
														style={{
															width: 20,
															height: 20,
															cursor: 'pointer',
															color: 'rgb(0, 206, 189)'
														}}
													>
														<circle cx={12} cy={12} r={10} />
														<line x1={8} y1={12} x2={16} y2={12} />
													</svg>
												</span>
												<span>1</span>
												<span>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
														className="feather feather-plus-circle"
														style={{
															width: 20,
															height: 20,
															cursor: 'pointer',
															color: 'rgb(0, 206, 189)'
														}}
													>
														<circle cx={12} cy={12} r={10} />
														<line x1={12} y1={8} x2={12} y2={16} />
														<line x1={8} y1={12} x2={16} y2={12} />
													</svg>
												</span>
											</div>
											<span className="Cart--item-name">Brunch authentique 1 personne</span>
											<span className="Cart--amount">25,00 €</span>
										</div>
									</div>
									<div className="Cart--results">
										<div className="Cart--result-line">
											<span className="Cart--result-name">Sous-total</span>
											<span className="Cart--amount">25,00 €</span>
										</div>
										<div className="Cart--result-line">
											<span className="Cart--result-name">Frais de livraison</span>
											<span>2,50 €</span>
										</div>
									</div>
									<div className="Cart--total">
										<span className="Cart--result-name">Total</span>
										<span className="Cart--amount">27,50 €</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
}

export default App;
