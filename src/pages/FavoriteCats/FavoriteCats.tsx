import CatCard from "../../components/CatCard/CatCard";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hook";
import { removeFromFavorite } from "../../app/reducers/fetchCatsReducer";

const FavoriteCats: React.FC = () => {
    const dispatch = useAppDispatch();
    const { favorites } = useAppSelector((state) => state.cats);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <CardsContainer>
            {favorites.map((item) => {
                return (
					<CatCard
						// чтобы ключ отличался от ключа в AllCats
                        key={item.id + item.url}
                        url={item.url}
                        liked={item.liked}
                        onClick={() => {
                            dispatch(removeFromFavorite(item.id));
                        }}
                    />
                );
            })}
        </CardsContainer>
    );
};

export default FavoriteCats;
