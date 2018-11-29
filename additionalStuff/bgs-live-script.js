if (/checkouts/.test(window.location.href)) {
    ; if ('object' == typeof Checkout && 'function' == typeof Checkout.$) { Checkout.$('.alt-payment-list-container').hide(); Checkout.$('.alternative-payment-separator').hide(); }
    var my_awesome_script = document.createElement('script');
    my_awesome_script.setAttribute('src', 'https://cdn.shopify.com/s/files/1/2410/1661/files/BGS_Checkout_Script.js?1484601643324622584');
    my_awesome_script.setAttribute('id', 'myScript');
    document.head.appendChild(my_awesome_script);

}
