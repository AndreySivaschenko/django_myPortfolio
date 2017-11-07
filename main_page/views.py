from django.shortcuts import render, render_to_response
from django.core.mail import send_mail

from django.core.mail import EmailMessage
from django.shortcuts import redirect
from django.template import Context
from django.template.loader import get_template
# Create your views here.
from asivashchenko import settings
from main_page.forms import ContactForm


def main(request):
    form_class = ContactForm

    # new logic!
    if request.method == 'POST':
        form = form_class(data=request.POST)

        if form.is_valid():
            contact_name = request.POST.get(
                'contact_name'
                , '')
            contact_email = request.POST.get(
                'contact_email'
                , '')
            form_content = request.POST.get('content', '')

            # Email the profile with the
            # contact information
            template = get_template('contact_tempate.txt')
        context = Context({
            'contact_name': contact_name,
            'contact_email': contact_email,
            'form_content': form_content,
        })
        content = template.render(context)

        email = EmailMessage(
            "New contact form submission",
            content,
            "Your website" + '',
            ['youremail@gmail.com'],
            headers={'Reply-To': contact_email}
        )
        email.send()
        return redirect('/')


    context = {
        'form':form_class,
    }
    return render(request, 'main_page/base.html', context)
