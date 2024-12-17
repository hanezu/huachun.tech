# Hanezu's personal website


## CV updates

1. Convert the CV to HTML
    * This is a good baseline: https://convertio.co/pdf-html/
    * Might need to do some cleaning:
        ```bash
        sed -i '' 's/<a\([^>]*\)>/<a\1 target="_blank">/g' public/html/cv.html
        ```