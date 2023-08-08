

import Alpine from 'alpinejs'
import "../plugins/select2/js/select2.full.min.js"
import {head} from "axios";
window.Alpine = Alpine

Alpine.start()



$(document).on("ready",function ()
{
    $("[data-ajax-url]").select2({
        ajax:{
            url:$("[data-ajax-url]").attr("data-ajax-url"),
            processResults :function({results,pagination})
            {
                let lang = document.querySelector("html").getAttribute("lang")

                return {
                    results:results.map((d)=>{


                        if(lang === "en")
                        {

                            return {
                                text:d.name_en,
                                id:d.id
                            }
                        }else if(lang === "ar")
                        {
                            console.log(lang)
                            return {
                                text:d.name_ar,
                                id:d.id
                            }
                        }
                        console.log(lang)

                        return {
                            text: d.name_en,
                            id:d.id
                        }

                    }),
                    pagination:pagination
                }
            }

        },

    })
})

$(".select2").select2()
