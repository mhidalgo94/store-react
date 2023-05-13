import { useState, useEffect, useContext } from "react";
import { Container, Grid, Divider } from "@mui/material";
import { FilterContext } from "../../context/Product/filterProducts";
import MenuFilter from "../../components/MenuFilter/MenuFilter";
import FilterMinPrice from "../../components/MenuFilter/FilterMinPrice";
import CheckedCatergory from "../../components/MenuFilter/CheckedCatergory";
import ListProducts from "../../components/List/ListProducts";
import { getPublicProducts } from "../../api/fetchProducts";
import { useSnackBar } from "../../store/snackbarState";
import SearchProductsFilter from "../../components/MenuFilter/SearchProductsFilter";


function useFilters(){
  // const { filters ,setFilters }  = useContext(FilterContext);
  const {filters,setFilters}  = useContext(FilterContext);

  const filterProducts = (products)=> {
    return products.filter(product=>{
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.categories.map(category=>category.nombre).every(value=> filters.category.includes(value))
        )
      )
    })
  }

  return { filterProducts, setFilters }
}


export default function Products() {
  const {filterProducts} = useFilters();
  const [loading,setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [search,setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const {setOpen} = useSnackBar();
  
  useEffect(()=>{
    setLoading(true);
    getPublicProducts({ page:currentPage, search }).then(res=>{
      setProducts(res?.data?.data);
      setTotalPages(res?.data?.totalPages || 1);
    }).catch(err=>{
      const msg = err?.response?.data?.message || 'Error Server';
      setOpen(msg, 'error')
    }).finally(()=>{
      setLoading(false);
    })

  },[currentPage,setOpen,search])


  return (
      <Container sx={{p:4}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <MenuFilter >
              {/* Filter for price */}
              <FilterMinPrice />
              {/* Filter for categories  */}
              <CheckedCatergory/>
              <Divider />
              {/* Search Input */}
              <SearchProductsFilter changeSearch={setSearch} loading={loading}/>
            </MenuFilter >
          </Grid>
          <Grid item xs={12} sm={9} md={9} lg={9}>
            <ListProducts listProduct={filterProducts(products)} setCurrentPage={setCurrentPage} totalPages={totalPages} currentPage={currentPage} loading={loading}/>
          </Grid>
        </Grid>

      </Container>
  );
}
