            document.getElementById("knop").addEventListener("click", function(e){
                e.preventDefault();
                document.cookie = "login=true; expires=Thu, 18 Dec 2050 12:00:00 UTC"; 
                window.location.href = "/dashboard";
            });