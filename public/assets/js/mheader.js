function showMobileCatalog(){
    let teg = new TegMheader(".mobile_catalog_wrapper");
    teg.removeClass('hidden');
    teg.show();
    new TegMheader(".menu").hiden();
    new TegMheader([".clse",".mobile_overlay"]).show();
    if (teg.hasClass('empty')){
        teg.removeClass('empty');
    }
}

function HideAll(){
   new TegMheader([".mobile_search_wrapper",".mobile_catalog_wrapper",".clse",".mobile_overlay"]).hiden();
   new TegMheader(".menu").show();
}

function showSearchProduct(){
    HideAll();
    new TegMheader([".mobile_search_wrapper",".mobile_overlay"]).show();
}
